# CRA (中国地区地址库)

CRA 是一个兼容 Node.js 和 Vue.js 的库，提供生成和查询中国地区地址（包括省、市、区县）的功能。

[English](README.md)

## 功能特性

- **按代码或名称获取地址**：通过行政代码或名称获取完整的地址信息。
- **随机地址生成**：生成随机的省、市或区县级别地址。
- **层级关系查找**：根据代码或名称查找地区的层级关系，支持单个和多个查询。
- **模糊名称匹配**：进行模糊匹配以查找与给定名称相近的地区。
- **树形结构导出**：根据给定的省级代码导出省、市、区县的完整树形结构。
- **模块化设计**：代码库易于扩展和维护，并遵循最佳实践。

## 安装

使用 npm 安装包：

```bash
npm install cra-z
```

## 使用方法

### 在 Node.js 项目中

```javascript
const cra = require('cra-z');

// 按名称查找地址
const addressByName = cra.findByName('北京市');
console.log('按名称查找到的地址:', addressByName);

// 按代码查找层级关系
const hierarchyByCode = cra.findHierarchy('350200');
console.log('按代码查找到的层级关系:', hierarchyByCode);

// 模糊匹配
const fuzzyResults = cra.fuzzyMatchByName('柳州');
console.log('模糊匹配结果:', fuzzyResults);

// 导出省份树形结构
const tree = cra.exportTreeByProvinceCode('350000');
console.log('树形结构:', tree);
```

### 在 Vue.js 项目中

```javascript
import cra from 'cra-z';

// 使用与 Node.js 类似的方法
const addressByName = cra.findByName('厦门市');
console.log('按名称查找到的地址:', addressByName);
```

### TypeScript 支持
该库包含 TypeScript 类型定义，可以直接在 TypeScript 项目中使用。

## 贡献
欢迎贡献代码！请遵循标准的编码指南，并确保所有测试通过后再提交 pull request。

## 许可证
有关详细信息，请参阅 LICENSE 文件。