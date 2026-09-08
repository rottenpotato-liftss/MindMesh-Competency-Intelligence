import { Router, type IRouter } from "express";
import healthRouter from "./health";
import mindmeshRouter from "./mindmesh";

const router: IRouter = Router();

router.use(healthRouter);
router.use(mindmeshRouter);

export default router;
