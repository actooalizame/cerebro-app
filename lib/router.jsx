import { mount } from 'react-mounter'

FlowRouter.route('/', {
	name: 'home',
	action(){
		mount(MainLayout, {content: <FrontGrid  />});
	}
});