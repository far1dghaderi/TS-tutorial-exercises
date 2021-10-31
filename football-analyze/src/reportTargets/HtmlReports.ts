import { OutputTarget } from "../classes/Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
        <div>
        <h1>Report</h1>
        ${report}
        </div>
        `;

    fs.writeFileSync("report.html", html);
  }
}
