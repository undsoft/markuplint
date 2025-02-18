---
title: インデント (indentation)
---

# インデント (`indentation`)

インデントが統一されていないと警告します。

**🔧 自動補正可能**

## ルールの詳細

👎 間違ったコード例

<!-- prettier-ignore-start -->
```html
<div>
  <span>lorem</span>
	ipsam
   </div>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
👍 正しいコード例

<!-- prettier-ignore-start -->
```html
<div>
	<span>lorem</span>
	ipsam
</div>
```
<!-- prettier-ignore-end -->

### 設定値

型: `"tab" | number`

| 設定値  | デフォルト | 解説                                         |
| ------- | ---------- | -------------------------------------------- |
| `"tab"` |            | タブ文字に統一します。                       |
| [数値]  | `2`        | 指定した数値の幅のスペース文字（正の整数）。 |

### オプション

#### `alignment`

開始タグと終了タグのインデントが揃っていないと警告します。

型: `boolean`
デフォルト: `true`

#### `indent-nested-nodes`

型: `boolean | "always" | "never"`

| 設定値     | デフォルト | 解説                                                               |
| ---------- | ---------- | ------------------------------------------------------------------ |
| `false`    |            | 設定を無効にします（警告しません）。                               |
| `true`     | ✓          | 子ノードは親ノードより一段インデントが下がっていないと警告します。 |
| `"always"` |            | 設定値 `true` と同じです。                                         |
| `"never"`  |            | 子ノードが親ノードと同じインデント位置でなければ警告します。       |

### デフォルトの警告の厳しさ

`warning`
