export default function LoginForm(props) {
  async function handleSubmit(e) {
    e.preventDefault();
    props.login(e.target.username.value, e.target.password.value);
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset autoComplete="off">
        <label className="my-5" htmlFor="username">
          Username:{" "}
        </label>
        <input className="mx-2 my-5 text-gray-900" name="username" />
        <label className="my-5" htmlFor="password">
          Password:{" "}
        </label>
        <input
          className="mx-2 my-5 text-gray-900"
          type="password"
          name="password"
        />
        <button
          className="px-4 py-1 mx-2 my-5 bg-gray-700 rounded-lg"
          value="submit"
        >
          Log In
        </button>
      </fieldset>
    </form>
  );
}
