import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state";
import { useActions } from "../hooks/useActions";
import { RootState } from "../state/reducers";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState<string>("");

  //searchRepositories already have dispatch init
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    //dispatch the searchRepositories action to reducer
    searchRepositories(term);

    setTerm("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
