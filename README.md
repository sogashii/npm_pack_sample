# npm_pack_sample

## `core` をパッケージ化して `main` で `yarn install` するプロジェクトです。

### 起動方法

#### core

- パッケージのインストール

```shell
yarn install
```

- 起動（`core`単体で起動したい場合）

```shell
yarn dev
```

- パッケージ化

```shell
yarn build
yarn pack
```

- `core`ディレクトリに`sample-core-v0.0.0.tgz`が作成されるので、そのファイルを`main`フォルダへ移動

#### main

- パッケージのインストール

```shell
yarn install
```

- `core`パッケージのインストール

```shell
yarn add ./sample-core-v0.0.0.tgz
```

- バージョンが変わらない限りキャッシュされるので、`core`を変更した場合はキャッシュ削除

```shell
yarn cache clean
```

- 起動

```shell
yarn dev
```
