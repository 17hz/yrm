yrm -- Yarn Registry Manager
===

[![NPM version][npm-image]][npm-url]

`yrm` can help you easy and fast switch between different npm registries,
now include: `npm`, `cnpm`, `taobao`, `nj(nodejitsu)`, `rednpm`.

## Install

```
$ npm install -g @retroxs/yrm
```

## Example
```
$ yrm ls

* npm -----  https://registry.npmjs.org/
  cnpm ----  http://r.cnpmjs.org/
  taobao --  https://registry.npm.taobao.org/
  nj ------  https://registry.nodejitsu.com/
  rednpm -- http://registry.mirror.cqupt.edu.cn
  skimdb -- https://skimdb.npmjs.com/registry

```

```
$ yrm use cnpm  //switch registry to cnpm

    Registry has been set to: http://r.cnpmjs.org/

```

## Usage

```
Usage: yrm [options] [command]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

  Commands:

    ls                           List all the registries
    current                      Show current registry name
    use <registry>               Change registry to registry

```

## Registries

* [npm](https://www.npmjs.org)
* [cnpm](http://cnpmjs.org)
* [nodejitsu](https://www.nodejitsu.com)
* [taobao](http://npm.taobao.org/)
* [rednpm](http://npm.mirror.cqupt.edu.cn)


## Notice

When you use an other registry, you can not use the `publish` command. 

## LICENSE
MIT


[npm-image]: https://img.shields.io/npm/v/yrm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/yrm
