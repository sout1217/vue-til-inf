import LoginForm from '@/components/LoginForm';
import { shallowMount } from '@vue/test-utils';

describe('LoginForm', () => {
  test('ID 와 PW 가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });

    const button = wrapper.find('button');
    console.log(button.html());

    expect(button.element.disabled).toBeTruthy();
  });
});
