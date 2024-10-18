const sentence = ' Iam alamin.'
// const result = '.nimala ma I'

let reverse = ''
for(const letter of sentence){
    console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);
//

for(let i = 0; i <sentence.length; i++){
    console.log(i);
    console,log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);

// shortcut

const reversed =  sentence.split('').reverse().join('');
console.log(reversed);



// explain the code
এই কোডটি একটি স্ট্রিং উল্টোভাবে (reverse) করার জন্য লেখা হয়েছে। আমি প্রতিটি অংশ ব্যাখ্যা করছি:

### 1. প্রথম অংশ (উল্টো করার জন্য লুপ ব্যবহার):
```javascript
const sentence = ' Iam alamin.';
let reverse = '';
for (const letter of sentence) {
    console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);
```

**ব্যাখ্যা**:
- এখানে `sentence` নামে একটি স্ট্রিং ডিক্লেয়ার করা হয়েছে।
- `reverse` নামক একটি খালি স্ট্রিং তৈরি করা হয়েছে, যেখানে উল্টো স্ট্রিং সংরক্ষণ করা হবে।
- `for (const letter of sentence)` লুপটি `sentence` স্ট্রিং-এর প্রতিটি অক্ষর (character) ইটারেট করছে।
- প্রতিটি অক্ষরকে `reverse = letter + reverse` এর মাধ্যমে স্ট্রিং-এর শুরুতে যোগ করা হচ্ছে (এটা উল্টো যোগ করার কৌশল)।
- `console.log(reverse)` লুপ শেষে উল্টো স্ট্রিং প্রিন্ট করবে।

### 2. দ্বিতীয় অংশ (ইনডেক্স ব্যবহার করে):
```javascript
for (let i = 0; i < sentence.length; i++) {
    console.log(i);
    console.log(sentence[i]); // ছোট ভুল ছিল, এটাকে ঠিক করেছি
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);
```

**ব্যাখ্যা**:
- এখানে `for` লুপ ব্যবহার করে স্ট্রিং-এর প্রতিটি ইনডেক্সের মাধ্যমে কাজ করা হচ্ছে।
- `i = 0` থেকে শুরু করে `sentence.length` পর্যন্ত লুপ চলছে।
- `console.log(i)` ইনডেক্স প্রিন্ট করে।
- `console.log(sentence[i])` প্রতিটি অক্ষর প্রিন্ট করে।
- `rev = letter + rev;` প্রতিটি অক্ষরকে উল্টো যোগ করে।
- শেষের দিকে `console.log(rev)` স্ট্রিং-এর উল্টো ফলাফল প্রিন্ট করবে। তবে, এখানে `rev` এর আগে ডিফাইন করা ছিল না, তাই এটি কাজ করবে না (একটি ভুল আছে)।

### 3. শর্টকাট (এক লাইনে):
```javascript
const reversed = sentence.split('').reverse().join('');
console.log(reversed);
```

**ব্যাখ্যা**:
- `sentence.split('')`: এটি স্ট্রিং-টিকে একটি অ্যারে (array) তে ভাগ করে, যেখানে প্রতিটি অক্ষর আলাদা আইটেম হিসাবে থাকে।
- `reverse()`: এই মেথড অ্যারে-টিকে উল্টো করে।
- `join('')`: উল্টো অ্যারে-কে আবার স্ট্রিং এ রূপান্তর করে।
- এক লাইনে পুরো স্ট্রিং উল্টো হয়ে যায় এবং তা `reversed` ভ্যারিয়েবল-এ সংরক্ষিত হয়।
