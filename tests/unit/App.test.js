import HelloWorld from '@/components/HelloWorld.vue';
import { mount } from '@vue/test-utils';

test('renders properly', () => {
    const wrapper = mount(HelloWorld, {
        props: { msg: 'Hello World!' },
    });
    expect(wrapper.text()).toContain('Ecosystem');
});
