import { useLoginContext} from "../providers/LoginProvider";

const withLogin = (WrappedComponent: React.ComponentType<any>) => {
    return (props: any) => {
        const [state] = useLoginContext();
      if (state.loggedIn === false) {
        return <p>Přístup zamítnut. Přihlaste se.</p>;
      }
      return <WrappedComponent {...props} />;
    };
};

export default withLogin;