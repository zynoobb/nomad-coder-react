import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);

  useEffect(() => {
    console.log('I run only once.');
  }, []); // (첫 번째 인자는 실행 함수)

  // useEffect 를 사용하는 이유, onChange할 때마다 리렌더링 됨
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  // 따라서 아래와 같이 특정 조건이 변화할 때만 해당되는 내용을 바꿀 수 있음
  useEffect(() => {
    console.log('I run when "counter" changes.');
  }, [counter]);

  useEffect(() => {
    if (keyword.length > 5) console.log('I run when "keyword" changes.');
  }, [keyword]);

  useEffect(() => {
    console.log('I run when "keyword" & "counter" changes.');
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
