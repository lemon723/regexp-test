let str = `
010-1234-5678
Theqwerty@gmail.com
https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%82%99%ED%83%80
the quick brown fox jumps over the lazy dog.
abbcccddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)