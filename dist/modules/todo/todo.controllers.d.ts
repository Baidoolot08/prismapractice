import { Request, Response } from "express";
declare const _default: {
    getAllData: (req: Request, res: Response) => Promise<void>;
    addNewData: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delNewData: (req: Request, res: Response) => Promise<void>;
    patchData: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    putData: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export default _default;
//# sourceMappingURL=todo.controllers.d.ts.map