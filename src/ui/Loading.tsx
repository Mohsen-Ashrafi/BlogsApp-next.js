// "use client";
// // import { ThreeDots } from "react-loader-spinner";
// import CircularProgress from "@mui/material/CircularProgress";

// function Loading() {
//   return (
//     <CircularProgress
//       //   height={height}
//       //   width={width}
//       //   radius="9"
//       color="primary"
//       //   ariaLabel="three-dots-loading"
//       //   wrapperStyle={{
//       //     display: "flex",
//       //     justifyContent: "center",
//       //   }}
//       //   visible={false}
//     />
//   );
// }
// export default Loading;

import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}