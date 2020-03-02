import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    SN: '@id',
    Account_site: '@sentence(1,1)',
    Rg_country: '@sentence(1,1)',
    Possession: '@sentence(1,1)',
    Account_owner: '@sentence(1,1)',
    Maccount_email: '@sentence(1,1)',
    Maccount_lpwd: '@sentence(1,1)',
    Maccount_epwd: '@sentence(1,1)',
    phone1: '@sentence(1,1)',
    phone2: '@sentence(1,1)',
    app_phone: '@sentence(1,1)',
    Saccount_email: '@sentence(1,1)',
    Saccount_lpwd: '@sentence(1,1)',
    Saccount_epwd: '@sentence(1,1)',
    CO_CHS: '@sentence(1,1)',
    CO_EN: '@sentence(1,1)',
    NOTE: '@sentence(1,1)',
    user_ID : '@sentence(1,1)',
    username : '@sentence(1,1)',
    Whether_locked : '@sentence(1,1)',
    login_password : '@sentence(1,1)',
    Possession : '@sentence(1,1)',
    contact_number : '@sentence(1,1)',
    Email : '@sentence(1,1)',
    Roles : '@sentence(1,1)',
    operator : '@sentence(1,1)',
    Operation_table_name : '@sentence(1,1)',
    Operation_Date : '@sentence(1,1)',
    Edit_project : '@sentence(1,1)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
