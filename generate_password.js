function sample(array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function generatePassword(options) {
  // 需要多少資料可以放入箱子內
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  // toUpperCase() 轉換大寫
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  // 假資料
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '40'
  // }
  // console.log('options', options)

  // 建立箱子儲存使用者想要的東西
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  // 將使用者不想要的東西拿出
  if (options.excludeCharacters) {
    collection = collection.filter(character => !options.excludeCharacters.includes(character)
    )
  }
  // 使用者想要幾個密碼就傳幾個
  let password = ''
  for (let i = 1; i <= options.length; i++) {
    // 回傳密碼
    password += sample(collection)
  }
  return password
}
module.exports = generatePassword