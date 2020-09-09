import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Photo({ url }) {
  return <img src={url} alt="of the day" />;
}
