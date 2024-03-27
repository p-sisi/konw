## Git

### 概念

 Git是目前世界上最先进的分布式版本控制系统。

 版本控制系统：在开发中，通常会有很多个项目版本，可以记录每次的文件改动，还能协调多用户编辑。

![image-20240326190534612](C:\Users\sisi\AppData\Roaming\Typora\typora-user-images\image-20240326190534612.png)



### git、github区别

- **Git**是一个分布式控制系统，简单来说就是一个软件，用于记录一个或者若干文件内容的变化，以便将来查阅特定版本修改情况的软件。
- **GitHub**（https：//www.github.com）是一个为用户提供Git服务的网站，简单说就是一个可以放代码的地方（不过可以放的不仅是代码）。GitHub除了提供管理Git的web界面外，还提供了订阅、关注、讨论组、在线编辑器等丰富的功能。



### Git的使用

#### 操作区域

- Git Repository(Git 本地仓库)：最终确定的文件保存到仓库，成为一个新的版本，并且对他人可见

- 暂存区：暂存已经修改的文件最后统一提交到Git本地仓库中，再提交到远程仓

  ```ts
  git add . （.全部文件  或者   text.ts具体文件名)     工作区->暂存区
  ```

- 工作区(Working Directory)：添加、编辑、修改文件等操作

  ```ts
  git commit -m "提交注释"       暂存区->本地仓库
  ```

- 远程仓库：代码最终存放的位置

  ```ts
  git push   本地仓库->远程仓库
  ```

  

#### 本地仓库

仓库又叫版本库，英文名为repository，可以简单理解成是一个目录，用来存放代码的，对代码的每一个操作都能跟踪到。

在安装好后首次使用，需要进行全局配置：

- 桌面右键空白处点击 “**Git Bash here**” 以打开Git命令行窗口
-  $ git config --global user.name "用户名"
-  $ git config --global user.email "邮箱地址"

创建仓库

```js
cd 到需要管理的项目中
git bash here
git init
//出现文件夹.git则为创建成功
```



#### 版本回退

- 首先查看版本，找到需要回退的版本号

  ```js
   git log--pretty=oneline      版本号就是输出结果中前面黄色部分
  ```

- 回退到指定版本

  ```js
   git reset --hard 版本号
  ```

- 回到未来：当执行回退操作之后，想要继续回到之前的版本号，需要依靠指令查看历史操作，便于找到之前的版本号

  ```js
   git reflog
  ```



#### Git分支

- 比如说开发一个商场项目，其中可能就包括了用户模块（user分支）、商品模块（goods分支）等，多个分支组成一个完整的项目。

- 每次版本提交后都会有记录，Git把它们串成时间线，形成类似于时间轴的东西，这个时间轴就是一个分支，我们称之为master分支。

- 在开发中往往是团队协作的，多人进行开发，需要创建多个分支，分支上的工作不影响其他分支的正常使用，会更加安全

  ```js
  git branch           查看分支
  git branch 分支名     新建新的分支，并切换到新分支
  it checkout 分支名    切换分支
  git branch -d 分支名  删除分支，删除分支前一定要先退出先前的分支
  git merge 被合并的分支名   合并分支，会把两个分支的内容进行合并
  ```





#### Git提交忽略文件

 有些文件不需要提交到远程仓库中，例如node_modules

```js
1、新建忽略文件.gitignore,该文件用户声明忽略文件或不忽略文件的规则，规则对当前目录及其子目录生效
 .gitignore 文件放在最外层，与node_modules同级
 
2、该文件没有文件名，没有办法直接新建，需要使用命令
 $ touch .gitignore 

3、创建之后，可以直接使用记事本打开，直接输入下面的规则即可，比如想忽略js文件夹中的所有内容，则在.gitignore文件中直接写 /js/ ，忽略node_modules、dist等文件： 
				.DS_Store
                node_modules/
                platforms/
                dist/
                npm-debug.log*
                yarn-debug.log*
                yarn-error.log*
                package-lock.json

                # Editor directories and files
                .idea
                .vscode
                *.suo
                *.ntvs*
                *.njsproj
                *.sln
4、常见规则写法：
/mtk/        过滤整个文件夹
*.zip        过滤所有.zip 文件
/mtk/do.c    过滤某个具体文件
！index.php   不过滤具体某个文件
```





### Git操作

在实际开发中，需要加入别人的项目进行git，或者自己的项目git

1. 在github中**新建仓库**，复制远程仓库地址

2. 在本地存放代码的文件夹中  右键   选择   **git bash  here**

   ```js
   1、 git  init    //如果是直接clone则不需要初始化仓库
   2、 git clone git@github.com:p-sisi/GeneralBackManagement.git（远程仓库地址）
      获取远程仓库地址：打开github远程仓库，点击code，ssh地址
   ```

3. 如果想忽略某些文件不上传到远程仓库中，则参考下面知识点

4. 本地修改了代码之后，将修改的代码

   ```js
   1、 git add .    //本地工作区 -->  本地暂存区
   //如果出现警告LF will be replaced by CRLF the next time Git touches it，解决方法：
      git config core.autocrlf false
   //出现 on branch master no commits yet  则为添加成功
   
   2、 git commit -m "提交注释"    //本地暂存区 --> 本地仓库   
   ```

5. 本地仓库与远程仓库建立连接：

   ```js
   //初次与远程仓库连接，需要以下步骤：
   1、查看密钥SSH，到C盘用户目录下查找.ssh目录，查看是否存在id_rsa和id_rsa.pub这两个文件；
      若没有这两个文件： ssh-keygen -t rsa -C "203915779@qq.com"   
                      输入命令后一直回车，当上面提到的.ssh目录及文件出现后，密钥创建成功
   2、在github中添加密钥：
      点击头像右下角三角形---选择“settings”---左边导航栏选择“developer settings”----“personal      access tokens”---“tokens”---“create new tokens”---选择第一个beta---输入名字后，把          id_rsa.pub以记事本打开，复制里面所有内容到描述框中----密钥SSH即可添加成功。  
   3、查看密钥是否添加成功：
   	cd ~/.ssh    cd到这个地址
   	ls           如果出现这两个文件名即成功   记得再次cd到代码目录下
    
    //非初次连接则直接使用以下命令：
    git remote add origin git@github.com:p-sisi/GeneralBackManagement.git 
   查看是否连接成功：
   git remote -v   出现两个地址，fetch、push即为成功
   ```

   ```js
   连接建立之后，在已经add、commit的情况下，提交本地仓库代码到远程仓库中：
   git push -u origin master    提交到远程仓库中的master分支
   git push    可以直接这样
   //第一次提交时，可能会出现 Are you sure you want to continue connecting (yes/no)?  记住千万不要直接回车，输入yes后回车
   ```

6. 提交代码到远程仓库后，多人协作可能会出现   **代码冲突**，提交时会出现错误，需要解决冲突后再次执行上面的三个步骤

   ```js
   1、git pull    拉取之后，本地会出现有冲突的地方，与相关人员沟通后作出取舍
   2、重复add、commit、push重新提交
   ```

！！！！！每天 **git pull**  拉取远程仓库中的最新代码后再开发，可能会出现代码冲突



### VScode与Git

vsCode文件后面字母表示的意思

A       你本地新增的文件（远程仓库中没有）

C       文件的一个新拷贝

D      你本地删除的文件（远程仓库中上还在）

 M     文件的内容或者mode被修改了

 R      文件名被修改了

T      文件的类型被修改了

U      文件没有合并

 X      未知状态（可能是遇到git的bug了，可以向git提交bug report



### Git命令

- **git status**             查看当前仓库状态，比如说忘记自己上一次执行到什么指令了

  



### Git代码提交规范

- **feat**: 新功能
- **fix**: 修复bug
- **docs**: 更新文档
- **chore**: 构建过程或辅助工具的变动
- **style**: 代码样式、格式化等变动
- **refactor**: 代码重构
- **test**: 添加或修改测试代码
- **perf**: 性能优化
- **revert**: 撤销之前的提交

