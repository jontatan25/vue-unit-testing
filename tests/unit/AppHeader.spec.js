import AppHeader from "@/components/AppHeader.vue";
import { mount } from "@vue/test-utils";
describe("AppHeader", () => {
  test("if a user is not logged in, do not show the logout button", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
  });

  test("if a user is logged in, show the logout button", () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loggedIn: true });
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
