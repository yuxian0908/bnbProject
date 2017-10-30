1. 複製local到heroku
2. git status
3. git add .
4. git commit -m ""
5. git push https://git.heroku.com/yuxian-allfunction.git master
6. heroku ps:scale web=1
7. heroku open

8.設定資料庫
	heroku config:set PROD_MONGODB=mongodb://dbuser:dbpass@host1:port1,host2:port2/dbname

git remote add <remote> <url> : 新增遠端git位置
git remote remove <remote> : 移除遠端git位置
git remote -v : 查看遠端詳細位置