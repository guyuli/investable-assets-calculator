<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      >

      <v-expansion-panels
        v-model="totalBankDepositsExpanded"
        focusable
        popout
        >
        <v-expansion-panel>
          <v-expansion-panel-header>Total bank deposits: ${{totalBankDeposits}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row v-for="bankAccount in bankAccounts" :key="bankAccount.id">

              <v-col cols="12" sm="2">
                <v-text-field
                  v-model="bankAccount.bankName"
                  label="Bank name"
                  outlined
                  dense
                  hide-details
                  >
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="9">
                <v-text-field
                  v-model="bankAccount.amount"
                  label="Amount"
                  outlined
                  dense
                  hide-details
                  >
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="1" align-self="center">
                <v-btn
                  @click="removeBankAccount(bankAccount.id)"
                  color="red"
                  small
                  dark
                  right
                  >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </v-col>

            </v-row>

            <v-btn
              v-show="totalBankDepositsExpanded === 0 ? true : false"
              @click="addNewBankAccount"
              color="blue"
              small
              dark
              absolute
              bottom
              fab
              >
              <v-icon>mdi-plus</v-icon>
            </v-btn>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>






















      <!-- <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn> -->
    </v-form>

  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      numOfBankAccounts: 1,
      bankAccounts: [
        {
          id: 1,
          bankName: null,
          amount: null
        }
      ],
      totalBankDepositsExpanded: 0, // default to expand



      // name: '',
      // nameRules: [
      //   v => !!v || 'Name is required',
      //   v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      // ],
      // email: '',
      // emailRules: [
      //   v => !!v || 'E-mail is required',
      //   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      // ],
      // select: null,
      // items: [
      //   'Item 1',
      //   'Item 2',
      //   'Item 3',
      //   'Item 4',
      // ],
      // checkbox: false,
    }),
    computed: {
      totalBankDeposits() {
        let totalBankDeposits = 0;
        this.bankAccounts.forEach(bankAccount => {
          totalBankDeposits = totalBankDeposits + parseFloat(bankAccount.amount == null? 0 : bankAccount.amount);
        });
        return totalBankDeposits;
      }
    },
    methods: {
      addNewBankAccount() {
        this.numOfBankAccounts++;
        this.bankAccounts.push(
          {
            id: this.numOfBankAccounts,
            bankName: null,
            amount: null
          }
        );
      },
      removeBankAccount(bankAccountId) {
        this.bankAccounts = this.bankAccounts.filter(bankAccount => bankAccount.id != bankAccountId);
      }
      // validate () {
      //   this.$refs.form.validate()
      // },
      // reset () {
      //   this.$refs.form.reset()
      // },
      // resetValidation () {
      //   this.$refs.form.resetValidation()
      // },
    },
  }
</script>