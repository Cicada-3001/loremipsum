export default {
  White: '#ffffff',

  Amber100: '#FFF2CC',
  Amber400: '#EC930C',
  Amber500: '#CF760D',

  Neutral30: '#bec4d5',
  Neutral50: '#f7f9fc',
  Neutral80: '#303848',
  Neutral100: '#eff2f9',
  Neutral150: '#e7eaf4',
  Neutral200: '#d9deeb',
  Neutral300: '#bec4d5',
  Neutral400: '#9fa6bb',
  Neutral500: '#828ba2',
  Neutral600: '#656e83',
  Neutral700: '#495163',
  Neutral800: '#303848',
  Neutral900: '#1e2532',
  Neutral1000: '#0f141e',

  Blue50: '#1a91f0',
  Blue80: '#0f3871',
  Blue100: '#eaf6ff',
  Blue200: '#cce8ff',
  Blue300: '#2196f3',
  Blue400: '#168ae6',
  Blue500: '#1a91f0',

  Green40: '#48ba75',
  Green100: '#E7F4ED',
  Green300: '#25B869',
  Green400: '#22A860',
  Green500: '#00A042',
  Green700: '#135C37',

  Gray50: '#f8f9fc',
  Gray100: '#f2f5fa',
  Gray150: '#e6ebf4',
  Gray200: '#dde3f0',
  Gray300: '#cfd6e6',
  Gray400: '#b8becc',
  Gray500: '#98a1b3',
  Gray600: '#7a8599',
  Gray700: '#353a3f',

  Black100: '#4f5259',
  Black200: '#3d4047',
  Black300: '#262b33',
  Black400: '#0f141f',

  Red300: '#ff4c4c',
  Red400: '#f22222',

  Yellow150: '#FDC87A',
  Yellow300: '#f3b721',
  Yellow400: '#f09f13',
  Yellow500: '#e68f0e',

  Orange300: '#ffba19',
  Orange500: '#f68559',

  Indigo10: '#f1f2ff',
  Indigo70: '#343ecc',
  Indigo500: '#5863dd',
  Indigo600: '#363E96',
  Indigo700: '#21277F',
  Indigo800: '#151770',

  Purple: '#613fb0',
  Google: '#d34836',
}

type hexToRgbOptions = {
  asArray: boolean
}

export const hexToRgb = (hex: string, options: hexToRgbOptions): Array<number> | string => {
  const { asArray } = options || {}

  let fullHex = hex.substr(1)

  if (fullHex.length === 3) {
    fullHex = fullHex.split('').reduce((acc, c) => acc + c + c, '')
  }

  const r = parseInt(fullHex.substring(0, 2), 16)
  const g = parseInt(fullHex.substring(2, 4), 16)
  const b = parseInt(fullHex.substring(4, 6), 16)

  return asArray ? [r, g, b] : `rgb(${r}, ${g}, ${b})`
}

export const hexToRgba = (hex: string, alpha = 1): string => {
  const [r, g, b] = hexToRgb(hex, { asArray: true })

  return `rgba(${r},${g},${b}, ${alpha})`
}
