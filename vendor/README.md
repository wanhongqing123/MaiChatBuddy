# vendor — 原生 SDK

MaiChatBuddy 是独立仓库，原生依赖不共用 multi-ai-code 的副本，
避免单独 clone 出来缺东西、打包断链。

## tencent-im — 腾讯 IM Desktop SDK 9.0.7652

IM 收发消息、联系人、登录。同时提供 C 接口与 C++ 接口；
本项目走 **C 接口**（`windows/c_include/TIMCloud.h`），参数只有整数与
字符串、数据全是 JSON 文本，用 koffi 直接 FFI 绑定，不需要编译 C++ 插件。

运行时库：
- Windows x64 `windows/shared_lib/Win64/ImSDK.dll`
- Windows x86 `windows/shared_lib/Win32/ImSDK.dll`
- macOS       `macos/ImSDKForMac_Plus.framework/Versions/A/ImSDKForMac_Plus`

来源与校验和见 `tencent-im/README.md`。

## tencent-trtc — 腾讯 TRTC C++ SDK

远程桌面/音视频。当前尚未接入，先随仓库落地，避免后续再找下载链接
（官方文档页给的地址已失效，有效地址记在 `tencent-trtc/README.md`）。

## 与 MaiChat 的关系

两份内容一致（已按 SHA-256 逐一核对 ImSDK.dll）。MaiChat 桌面端是 Qt/C++，
直接链 C++ 接口；MaiChatBuddy 是 Electron，走 C 接口 + FFI。同一套库，
两种用法，各自独立演进。
