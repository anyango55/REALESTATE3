import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test); 

export default router;
// this is the route that the client will hit       

// router.get('/test', (req, res) => { // this is the route that the client will hit
//     res.json(
//         {
//             message: 'hello world!',
//         }
//     );
// });

// export default router;