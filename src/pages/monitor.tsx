import { useState } from "react";

import { Layout } from "../components/layout/layout";
import { Cards } from "src/components/monitor/cards";

const Monitor = () => {
  return (
    <div>
      <Layout>
        <div className="card">
          <Cards />
        </div>
      </Layout>
    </div>
  );
};

export default Monitor;
