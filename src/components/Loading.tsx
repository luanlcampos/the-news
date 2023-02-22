import Spinner from "./Spinner";
// TODO: Create a better loading
export default function Loading() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Spinner />
      <h2 style={{ marginBottom: "40px" }}>The News is on the way!</h2>
    </div>
  );
}
