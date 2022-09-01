import Link from "next/link";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../app/counterReducer";

export default function ExtraRoute() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Extra Route</h1>
      <p>Confirm that store is not recreated during navigations</p>
      <Link href="/">
        <a>Go back</a>
      </Link>
      <p>
        <button onClick={() => dispatch(increment())}>Increment counter</button>
      </p>
      <p>
        <button onClick={() => dispatch(decrement())}>Decrement counter</button>
      </p>
    </div>
  )
}
