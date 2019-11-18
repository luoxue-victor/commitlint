module.exports = (api, option) => {
  if (option.replace) {
    api.render('./template');
    api.extendPackage({
      devDependencies: {
        "commitizen": "^4.0.3",
        "commitlint": "^8.2.0",
        "conventional-changelog-cli": "^2.0.28",
        "husky": "^3.0.9"
      },
      scripts: {
        "log": "conventional-changelog --config vue-cli-plugin-commitlint/lib/log -i CHANGELOG.md -s -r 0",
        "cz": "npm run log && git add . && git cz"
      },
      "husky": {
        "hooks": {
          "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
      },
      "config": {
        "commitizen": {
          "path": "vue-cli-plugin-commitlint/lib/cz"
        }
      }
    })
    console.log('添加 vue-cli-plugin-commitlint 插件成功！')
  } else {
    console.log('添加 vue-cli-plugin-commitlint 插件失败！')
  }
}
