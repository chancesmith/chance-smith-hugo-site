---
layout: post
title: "TDD Examples and Lingo"
date: "2021-04-05T08Z"
tags: development, testing, sodium halogen
---

## New to testing and TDD?

It's helped out the team at Sodium Halogen to speak the lingo. Enjoy the list and examples.

Sources:
- [xunitpatterns.com](https://xunitpatterns.com/)
- [Uncle Bob](https://blog.cleancoder.com/)

## Test titles template

```javascript
describe('[unit of work]', () => {
  test('should [expected behavior] when [scenario/context]', () => {});
});
```

**example:**

```javascript
test('should replace blanks in customized prompts when player uses a customized deck',()=>{})
```

## Test Fixture

The initial data each test starts with is called a Test Fixture.

```javascript
test('should make word uppercase', () => {
  // given
  const word = 'special'; // Test Fixture 👈
  const expected = 'SPECIAL';
  // when
  const result = word.toUpperCase();
  // then
  expect(result).toBe(expected)
});
```

## Don't mock what you don't own

Your dependency can change over time. Instead of mocking a module you don't own, give your dependencies what they need so you can test their output.

```javascript
test('should get list of patients from CSV', () => {
  // given
  const filepath = `${__dirname}/patients.csv`;
  const createStream = fs.createReadStream(filepath); // 👈  filestream of our test CSV
  const expected = [{id: 1, name: "Zach"}];

  // when
  const report = new Report();
  await report.uploadPatientsCsv(createStream); // 👈 uses neatCsv() to transform a CSV file into JSON

  // then
  expect(report.patients).toBe(expected);
});
```

This is [Semal](https://www.linkedin.com/in/semal-shah/) 🧠 solving this problem. 👏 I was begging to mock the module. 🙃

## Erratic Test

Sometimes it passes and sometimes it fails.

This was an example from an iOS game we built.

```javascript
const NAME = 'Spencer Moore';
test('should first name', () => {
  // given
  const team = ['Adam', 'Alex', 'Brantley'];
  const expected = ['Alex', 'Adam', 'Brantley'];
  // when
  const result = shuffleArray(team); // Erratic Test 👈
  // then
  expect(result).toBe(expected)
});
```

**Fix:** unless there is 0 or 1 item in the array, prevent `shuffleArray()` from ever giving back the array back in the same order.


## Obscure Test

> An **Obscure Test** is when you’re having trouble understanding the behavior a test is verifying.

A common cause of Obscure Tests is when you have a Mystery Guest.

> **Mystery Guest** - The test-reader/developer is not able to see the cause and effect between fixture and verification logic because part of it is done outside the Test Method.

```javascript
const NAME = 'Spencer Moore';
test('should first name', () => {
  // given
  const expected = 'Spencer';
  // when
  const result = getFirstName(NAME); // NAME is the Mystery Guest 👈
  // then
  expect(result).toBe(expected)
});
```

Each test method creates a test fixture for its own private use.
