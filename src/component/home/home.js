import http from '../../utils/HttpClient';
import Vue from 'vue';
import {Notification} from 'element-ui';

const state = {

	show: false,
	currentId: null,
	product: [],
	username: '',
	idx: '',
	active: '0',
	activeName: 'first'
};
const actions = {
	timer: (store, n)=>{

		
	}
};

const mutations = {
	timer: (data, n)=>{

	}
}


export default {
	state,
	actions,
	mutations
}