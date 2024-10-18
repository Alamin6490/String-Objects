const school = 'RAJ UK Uttara Model School';

console.log(school.toLowerCase());
console.log(school.toUpperCase();)

// uppercase : ABCD EFG
//lowercase:  abcd efg

const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading book aibar porikkhai fatai felmu');
}
else{
    console.log('hudai hudai prista ultai ')
}


//explain
"===" এই চিহ্নটি সাধারণত প্রোগ্রামিং ভাষায় ব্যবহার করা হয় দুইটি মানের সমতা (equality) যাচাই করার জন্য। 

উদাহরণস্বরূপ, যদি আপনি দেখেন:

```python
if a === b:
    print("a এবং b সমান")
```

এখানে `a === b` এই শর্তটি যাচাই করে যে, `a` এবং `b` একই মানের কিনা। যদি সমান হয়, তাহলে শর্তটি সত্য (True) হবে।

### `==` এবং `===` এর পার্থক্য
কিছু প্রোগ্রামিং ভাষায় (যেমন: JavaScript), `===` মানের সাথে সাথে টাইপও যাচাই করে। অর্থাৎ, যদি `a` এবং `b` এর মান সমান হয় কিন্তু তাদের টাইপ (data type) আলাদা হয়, তাহলে `===` তাদের সমান হিসাবে গণ্য করবে না। 
অন্যদিকে, `==` শুধু মান দেখে, টাইপ নয়। 

### উদাহরণ:
```javascript
5 == "5"   // True
5 === "5"  // False (কারণ একটির টাইপ সংখ্যা এবং অন্যটি স্ট্রিং)
```



// trim 
const drink = 'water';
const liquid = 'water '

if(drink.trim()=== liquid.trim()){
    console.log('pani er opor nam life');

}
else{
    console.log('somudre pani ase khaite pari nah');
}


JavaScript-এ, **`trim()`** একটি স্ট্রিং মেথড যা স্ট্রিংয়ের শুরু এবং শেষের ফাঁকা স্থান (whitespace) মুছে ফেলে। এটি শুধুমাত্র স্ট্রিংয়ের শুরুতে এবং শেষে থাকা স্পেস সরায়, মাঝখানের স্পেসগুলোর উপর কোনো প্রভাব ফেলে না।

### Syntax:
```javascript
string.trim()
```

### উদাহরণ:
```javascript
let text = "   Hello, World!   ";
let trimmedText = text.trim();

console.log(trimmedText);  // Output: "Hello, World!"
```

এখানে, `trim()` ফাংশনটি স্ট্রিংয়ের শুরু এবং শেষে থাকা অতিরিক্ত ফাঁকা স্থানগুলো সরিয়ে দিয়ে একটি নতুন স্ট্রিং রিটার্ন করেছে।

### `trimStart()` এবং `trimEnd()`
- **`trimStart()`**: স্ট্রিংয়ের শুধুমাত্র শুরুর ফাঁকা স্থানগুলো সরায়।
- **`trimEnd()`**: স্ট্রিংয়ের শুধুমাত্র শেষের ফাঁকা স্থানগুলো সরায়।

#### উদাহরণ:
```javascript
let text = "   Hello, World!   ";
console.log(text.trimStart());  // Output: "Hello, World!   "
console.log(text.trimEnd());    // Output: "   Hello, World!"
``` 

এইভাবে, `trim()` মূলত ফাঁকা স্থান অপসারণের জন্য ব্যবহৃত হয় এবং এটি অনেক সাধারণ পরিস্থিতিতে দরকারি।