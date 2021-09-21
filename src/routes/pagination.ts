import { Router } from "express";
import { getPagination } from "./controllers/paginationController";

const router = Router();

router.get('/:current/:quantity', getPagination)

export default router;