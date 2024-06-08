import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PostMetricsList } from "./postMetrics/PostMetricsList";
import { PostMetricsCreate } from "./postMetrics/PostMetricsCreate";
import { PostMetricsEdit } from "./postMetrics/PostMetricsEdit";
import { PostMetricsShow } from "./postMetrics/PostMetricsShow";
import { CommentMetricsList } from "./commentMetrics/CommentMetricsList";
import { CommentMetricsCreate } from "./commentMetrics/CommentMetricsCreate";
import { CommentMetricsEdit } from "./commentMetrics/CommentMetricsEdit";
import { CommentMetricsShow } from "./commentMetrics/CommentMetricsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BlogServiceMongoDB"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PostMetrics"
          list={PostMetricsList}
          edit={PostMetricsEdit}
          create={PostMetricsCreate}
          show={PostMetricsShow}
        />
        <Resource
          name="CommentMetrics"
          list={CommentMetricsList}
          edit={CommentMetricsEdit}
          create={CommentMetricsCreate}
          show={CommentMetricsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
