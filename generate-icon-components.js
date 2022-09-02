const fs = require('fs')
const args = process.argv.slice(2)

function getPath() {
    return args[0].split('=')[0] === '--path'
        ? args[0].slice(7)
        : ''
}

function isValidPath(path) {
    return fs.existsSync(path)
}

function removeDir(path) {
    if (isValidPath(path)) {
        fs.rmSync(path, { recursive: true, force: true })
        console.log(`${path} exists and deleted!`)
    }
}

function createComponents() {
    const iconsPath = getPath()
    const isValidIconsPath = isValidPath(iconsPath)
    const componentsPath = './src/icons/assets/components/'

    let normalizedNames = []
    if (isValidIconsPath) {
        const files = fs.readdirSync(iconsPath)
        removeDir(componentsPath)
        fs.mkdirSync(componentsPath)
        for (const iconName of files) {
            const normalizedName = iconName
                .replace('.svg', '')
                .split('-')
                .map(previousName => previousName.charAt(0).toUpperCase() + previousName.slice(1))
                .join('')
                .concat('Icon')

            normalizedNames.push([normalizedName, iconName])

            fs.readFile(iconsPath + iconName, { encoding: 'utf8' }, (err, data) => {
                if (err != null) {
                    console.error(err)
                } else {
                    const content =
                        'import React from \'react\'\n'
                        + 'import { IconProps, IconWrapper } from \'../../style\'\n\n'
                        + `const ${normalizedName}: React.FC<IconProps> = ({ color = 'colors.greyscale.900', size }) => {\n`
                        + '    return (\n'
                        + '        <IconWrapper color={ color }>\n'
                        + `            ${data
                            .replace('width="24" height="24"', 'width={size} height={size}')
                            .replace(/class/g, 'className')}\n`
                        + '        </IconWrapper>\n'
                        + '    )\n'
                        + '}\n\n'
                        + `export default ${normalizedName}`

                    fs.writeFile(componentsPath + normalizedName + '.tsx', content, err => {
                        if (err) {
                            console.error(err)
                        }
                    })
                }
            })
        }
    }

    fs.writeFile(
        './src/icons/index.ts',
        normalizedNames
            .map(([name]) => `export { default as ${name} } from './assets/components/${name}'\n`)
            .toString().replaceAll(',', ''),
        (err) => {
            if (err) {
                console.error(err)
            }
        })

    fs.writeFile('./src/icons/types.ts',
        normalizedNames
            .map(([name]) => `import ${name} from './assets/components/${name}'\n`)
            .toString()
            .replaceAll(',', '') + '\n\nconst Icons = {\n' +
        normalizedNames
            .map(([name, originalName]) => `    '${originalName.replace('.svg', '')}': ${name},\n`)
            .toString().replaceAll(',    ', '    ') + '}\n\nexport default Icons',
        err => {
            if (err) {
                console.error(err)
            }
        }
    )
}

createComponents()
