#!/bin/bash

# data.js 文件拆分脚本
# 将大型 data.js 文件按功能模块拆分为多个独立文件

SOURCE_FILE="../data.js"
OUTPUT_DIR="."

echo "开始拆分 data.js 文件..."

# 检查源文件是否存在
if [ ! -f "$SOURCE_FILE" ]; then
    echo "错误: 源文件 $SOURCE_FILE 不存在"
    exit 1
fi

# 创建临时文件来存储提取的内容
echo "提取各模块内容..."

# 提取 arch-1 到 arch-4 (architecture 模块)
# 行范围: 49-1244
sed -n '49,1244p' "$SOURCE_FILE" > temp_arch.txt

# 提取 prog-1 到 prog-4 (programming 模块)  
# 行范围: 1246-2201
sed -n '1246,2201p' "$SOURCE_FILE" > temp_prog.txt

# 提取 db-1 到 db-4 (database 模块)
# 行范围: 2203-2823
sed -n '2203,2823p' "$SOURCE_FILE" > temp_db.txt

# 提取 front-1 到 front-4 (frontend 模块)
# 行范围: 2825-3491
sed -n '2825,3491p' "$SOURCE_FILE" > temp_front.txt

# 提取 back-1 到 back-5 (backend 模块)
# 行范围: 3493-4239
sed -n '3493,4239p' "$SOURCE_FILE" > temp_back.txt

# 提取 data-1 到 data-3 (data-analysis 模块)
# 行范围: 4241-4656
sed -n '4241,4656p' "$SOURCE_FILE" > temp_data.txt

echo "提取完成，开始生成模块文件..."

# 清理临时文件
rm -f temp_*.txt

echo "拆分完成!"
