import { promises as fs } from "fs";
import yaml from "js-yaml";

const handler = async (req: any, res: any): Promise<void> => {
  if (req.method === "GET") {
    const projectRootDir = process.cwd();
    const apps = yaml.load(
      await fs.readFile(projectRootDir + "/public/apps.yaml", "utf-8")
    );
    res.status(403).json(apps);
  }
};

export default handler;
