<template>
  <div class="layout">
    <a-row type="flex" justify="center" align="top">
      <a-col :xs="16" :sm="16" :md="10" :lg="8" :xl="5">
        <div class="login">
          <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
          >
            <div>
              <h2 class="login_title">Login</h2>
            </div>
            <a-form-item>
              <a-input
                v-decorator="[
                  'userName',
                  {
                    rules: [
                      { required: true, message: 'Please input your username!' }
                    ]
                  }
                ]"
                placeholder="Username"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  {
                    rules: [
                      { required: true, message: 'Please input your Password!' }
                    ]
                  }
                ]"
                type="password"
                placeholder="Password"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-checkbox
                v-decorator="[
                  'remember',
                  {
                    valuePropName: 'checked',
                    initialValue: true
                  }
                ]"
              >Remember me</a-checkbox>
              <a class="login-form-forgot" href="">Forgot password</a>
              <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>Or
              <a href="">register now!</a>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log("click");
        if (!err) {
          console.log("Received values of form: ", values);
          // 登录
          this.$store
            .dispatch("login", {
              username: values.userName,
              password: values.password
            })
            .then(() => {
              window.localStorage.setItem("username", values.userName);
              this.$router.push({ path: "/about" });
            });
        }
      });
    }
  }
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.login {
  width: 100%;
  margin-top: 20%;
}
.login_title {
  font-size: 1.8rem;
}
</style>
