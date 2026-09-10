import { EOL } from "os"
import * as Effect from "effect/Effect"
import { Commands } from "../commands"
import { Runtime } from "../../framework/runtime"

// 裸命令原来是启动 TUI 的入口。TUI 已移除（本项目只做图形界面客户端），
// 这里改为提示可用子命令——桌面端用的是 `service start` / `service status`
// / `service password`，不走这条路径。
export default Runtime.handler(Commands, () =>
  Effect.sync(() => {
    process.stderr.write(
      ["MaiChatBuddy 命令行没有交互式界面，请使用桌面应用。", "可用子命令见 --help。", ""].join(EOL),
    )
  }),
)
