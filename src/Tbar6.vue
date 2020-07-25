<template>
    <div class="form-inline">
        <div v-if="!passwordHidden">
            <label>
                <span class="strong-label">{{ fieldLabel }}</span>
                <input type="text" class="password-field form-control d-inline" v-model="passwordText" />
                <span class="display-eye fa fa-eye-slash" @click="hidePassword"></span>
            </label>
        </div>
        <div v-if="passwordHidden">
            <label>
                <span class="strong-label">{{ fieldLabel }}</span>
                <input type="password" class="password-field form-control d-inline" v-model="passwordText" />
                <span class="display-eye fa fa-eye" @click="showPassword"></span>
            </label>
        </div>
    </div>
</template>
<style scoped>
    input {
        margin-right: -30px;
        padding-right: 35px;
    }
    .strong-label {
        margin-right: 10px;
        font-weight: 900;
    }
    .display-eye {
        cursor:pointer;
    }
</style>
<script>
    export default {
        props: {
            passwordText: {
                default: "",
                type: String
            },
            fieldLabel: {
                default: "",
                type: String
            }
        },
        data () {
            return {
                passwordHidden: {
                    default: false,
                    type: Boolean
                }
            }
        },
        methods: {
            hidePassword() {
                this.passwordHidden = true;
            },
            showPassword() {
                this.passwordHidden = false;
            }
        }
    };
</script>