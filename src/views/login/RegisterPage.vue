<template>
  <div class="login-container">
    <el-container>
      <el-main>
        <div class="input-container">
          <div class="title">
            <h1 color="#67C23A">新用户注册</h1>
          </div>
          <form>
            <div class="input-wrapper">
              <el-input type="text" v-model="username" style="width: 240px" placeholder="用户/邮箱/手机号" maxlength="20"
                clearable />
            </div>
            <div class="input-wrapper">
              <el-input type="password" v-model="password" style="width: 240px" placeholder="请输入密码" maxlength="10"
                show-password clearable />
            </div>
            <div class="mb-4">
              <el-button type="primary" color="" plain @click="login">登录</el-button>
              <el-button type="primary" color="#67C23A" plain @click="handleRegister">注册</el-button>
            </div>
          </form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script >
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 登录按钮点击事件处理函数
    login() {
      // 在这里编写登录逻辑，可以发送登录请求等操作
      console.log('Username:', this.username)
      console.log('Password:', this.password)
      // 获取用户名和密码
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // 构建请求体
      const requestBody = {
        username: username,
        password: password
      };
      // 发送POST请求
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
        .then(response => response.json())
        .then(data => {
          // 处理响应数据
          if (data.success) {
            // 登录成功，进行页面跳转
            window.location.href = '/dashboard';
          } else {
            // 登录失败，显示错误信息
            alert(data.message);
            //跳转到注册页面
            window.location.href = '/register';
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
    // 注册按钮点击事件处理函数
    handleRegister() {
      // 页面跳转
      window.location.href = '/register';
    },

  }
}
</script>
<style>
.input-container {
  width: 300px;
  /* 设置框的宽度 */
  padding: 50px;
  /* 设置内边距，用于控制框的高度 */
  margin-left: 600px;
  /* 设置左边距，使框向右移动 */
  /* 设置其他样式 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  background-color: rgba(244, 244, 249, 0.707);
  /* 使用rgba()函数设置半透明的背景颜色 */
}

.login-container {
  background-image: url('@/config/');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  width: 100%;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: "KaiTi", sans-serif;
  color: rgb(125, 66, 202);
  font-size: 20px;
}

.input-wrapper {
  position: relative;
  margin-bottom: 20px;
}

input {
  width: 240px;
  border: none;
  border-bottom: 1px solid transparent;
  /* 设置边框颜色为透明 */
  padding: 5px;
  outline: none;
}

.register-button {
  background-color: #44ae44;
  color: white;
  border: none;
  padding: 10px 20px;
}</style>