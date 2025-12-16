# heading 1

## heading 2

### heading 3

_italics_

**bold text**

```js
console.log("hello");
```


```js
export default function Uni() {
  return (
    <div>
      {terms.map((term) => {
        return (
          <div className="py-5 border-b border-stone-300">
            <p className="text-xl text-stone-700 font-semibold">{term.title}</p>
            <ul className="list-disc list-inside">
              {term.courses.map((course) => {
                return <li className="text-stone-500 mt-2">{course}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
```

- one
- two
- three

1. one
2. two
3. three


1. Main item one
2. Main item two
3. Main item three


`something`

1. Main item one
    1. Sub-item one
    2. Sub-item two
2. Main item two
    1. Another sub-item
    2. And another
3. Main item three


testing

The lift coefficient ($C_L$) is a dimensionless coefficient.
