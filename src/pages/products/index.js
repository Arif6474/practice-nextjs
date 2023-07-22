import { Button } from "antd";
import Link from "next/link";
import React from "react";

function Products() {
  return (
    <div>
        <h1>Products page</h1>
      <Button type="primary">
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
}

export default Products;
