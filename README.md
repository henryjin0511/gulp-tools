# gulp-tools

### 基于gulp制作的小工具，可用于压缩js.css,image文件和scss解析css

## 运行过程

1. 项目基于nodejs和npm，请先安装nodejs（npm已集成）
2. cmd模式下 git clone git@github.com:jinming6568/gulp-tools.git
3. cmd模式下 cd gulp-tools
4. cmd模式下 npm install
	注意：npm服务器在国内访问并不稳定，此时有几种方法
	* 此模式需要本地开启代理服务 cmd模式 npm config set proxy http://127.0.0.1:1080  后面的网址是本地代理地址题。
	* cmd模式 npm config set registry https://registry.npm.taobao.org/  
	* cmd模式 npm install -g cnpm --registry=https://registry.npm.taobao.org  安装cnpm代替npm以后在使用npm的时候自行替换为cnpm即可
5. 安装完成即可使用，暂时小工具只提供了四种命令（以下均为在项目内的cmd模式运行）
	* gulp jsMin  压缩js：此命令会将src中的js文件压缩并生成在dist文件夹中
	* gulp scssToCss scss转css：此命令会将src中的scss文件编译生成css在dist文件夹中，gulpfile.js中可以修改参数来确定生成css是否压缩
	* gulp cssMin 压缩css：此命令会将src中的css文件压缩并生成在dist文件夹中
	* gulp imagemin 压缩图片：此命令会将src中的{jpg,jpeg,png,gif}文件压缩并生成在dist文件夹中
