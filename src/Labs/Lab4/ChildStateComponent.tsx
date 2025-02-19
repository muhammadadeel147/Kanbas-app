export default function ChildStateComponent({
    counter,
    setCounter,
  }: {
    counter: number;
    setCounter: (counter: number) => void;
  }) {
    return (
      <div id="wd-child-state">
        <h3>Counter {counter}</h3> {/* Display the counter in the child */}
        <button
          onClick={() => setCounter(counter + 1)} // Increment counter
          id="wd-increment-child-state-click"
          className="btn btn-success m-1"
        >
          Increment
        </button>
        <button
          onClick={() => setCounter(counter - 1)} // Decrement counter
          id="wd-decrement-child-state-click"
          className="btn btn-danger m-1"
        >
          Decrement
        </button>
        <hr />
      </div>
    );
  }
  