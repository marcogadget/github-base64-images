# github-base64-images


# run server
node index.js

#### Testing the web server

# get the javascript file with
curl -i localhost:9000/server.js

# testing with non-existing file
curl -i localhost:9000/invalid-file.doc

____________________________________________________________________



Test #1 (Using Markdown)
- The suggested Mardown approach here (https://github.com/jch/html-pipeline/pull/227)
  does not work in case of Commit messages. See
  https://github.com/marcogadget/github-base64-images/commit/ba3a965fae38e02bb7b2bbb38b20a1970e6dfbd7

Test #2 (Using HTML)
- Does not work. See  previous commit message for result:
  https://github.com/marcogadget/github-base64-images/commit/dcccbabd9838321e9c07934ef0f9a904fc81e9c0

Test #3 (à l'aide d'un fichier dans le répo)
![Un exemple d'image et Markdown](public/image-test.png)


