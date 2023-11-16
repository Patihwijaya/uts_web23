import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Benner
import Benner from '../views/benner/list'
import AddBenner from '../views/benner/add'
import EditBenner from '../views/benner/edit'
import DetailBenner from '../views/benner/detail'
// Product
import Product from '../views/product/list'
import AddProduct from '../views/product/add'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-benner',
			name: 'list-benner',
			component: Benner
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/add-product',
			name: 'add-product',
			component: AddProduct
		},
		{
			path: '/add-benner',
			name: 'add-bnner',
			component: AddBenner
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/edit-benner',
			name: 'edit-benner',
			component: EditBenner
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/detail-benner',
			name: 'detail-benner',
			component: DetailBenner
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		}
	]
})
