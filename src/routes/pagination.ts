import { Router, Request, Response } from "express";
import { adjustArray, whereBegin } from "../utils/utils";

const router = Router();

router.get('/:current/:quantity', (req: Request, res: Response) => {
	let { current, quantity } = req.params;
	if (!current || !quantity)
		return res.status(400).json({ message: 'Missing parameters' });

	const convertedCurrent = Number(current);
	const convertedQuantity = Number(quantity);

	if (isNaN(convertedCurrent) || isNaN(convertedQuantity))
		return res.status(400).json({ message: 'Incorrect input value' });


	const pageLength = convertedQuantity > 5 ? 5 : convertedQuantity;

	if (convertedCurrent <= 0 || convertedQuantity <= 0)
		return res.status(400).json({ message: 'Cannot enter current page or page quantity equals than 0' });
	if (convertedCurrent > convertedQuantity)
		return res.status(400).json({ message: 'Current page greater than page quantity' });

	const paginationArray = Array.from(
		{
			length: pageLength
		}, (_, i) => i + whereBegin(convertedCurrent, pageLength, convertedQuantity)
	).filter(value => value > 0 && value <= convertedQuantity);

	const response = adjustArray(convertedCurrent, convertedQuantity, paginationArray);

	return res.send(response);
})

export default router;