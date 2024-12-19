import { Request, Response } from "express";
import { CreateUser } from "../../application/use-cases/CreateUser";

export class SignUpController {
    constructor(private SignUpUseCase: CreateUser){};

    public signUp = async (req: Request, res: Response) => {
        const { name, email, password, confirmPassword } = req.body;

        const user = await this.SignUpUseCase.execute({
            name, email, password, confirmPassword
        });

        res.status(201).json(user);
    }
}