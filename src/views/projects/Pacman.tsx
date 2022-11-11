import React from 'react';
import ProjectPageContainer from '../../components/projects/ProjectPageContainer';
import ProjectSection from '../../components/projects/ProjectSection'

import {project} from '../../content/Projects'

class Pacman extends React.Component {


    render() {

        const page_project = project.projects["pacman"]
        const footer_info = [
                {
                    heading: "Project Info",
                    desc: "Developed in Master's Degree Course - Audio Pattern Recognition - 2022"
                }
            ]

     return(
        <ProjectPageContainer  project={page_project} footer={footer_info}>
            <ProjectSection id="intro-header" title="Introduction">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, turpis sed condimentum interdum, nisi augue faucibus libero, non finibus libero tellus eu sapien. Phasellus egestas, turpis non mollis tincidunt, dolor augue gravida turpis, et rhoncus dui urna eu lorem. Duis dapibus lacus ac velit viverra convallis finibus viverra dui. Mauris scelerisque porttitor congue. In hac habitasse platea dictumst. Maecenas varius facilisis dictum. Pellentesque porttitor felis id vehicula hendrerit. In turpis dui, mattis sed condimentum vel, consectetur eu ipsum. Phasellus et augue nec risus tincidunt volutpat et ac odio.

                Sed ac pellentesque ex. Morbi nec egestas ipsum. Sed fringilla odio nec tortor ultrices mollis. Proin tincidunt varius dolor. Sed non magna ac lorem cursus aliquet. Cras semper aliquam purus, sit amet pharetra augue placerat feugiat. Phasellus sollicitudin est a augue scelerisque auctor. Phasellus at ultrices ipsum. Phasellus blandit eleifend eros, nec ultricies urna consectetur sit amet. Praesent sem odio, molestie sed orci ut, mattis faucibus nulla. Fusce odio massa, hendrerit quis tincidunt et, volutpat vel quam. Nulla semper blandit mattis. Nullam vel malesuada ante. Etiam quis porta est. Fusce metus mauris, lacinia vel ornare cursus, maximus at massa. Mauris sodales semper orci.

                In vitae feugiat est. Maecenas volutpat ac lorem non egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean placerat augue nec dui sagittis, sed ultrices metus cursus. Suspendisse semper hendrerit nunc, vitae consectetur nulla scelerisque id. Proin aliquam laoreet risus sed fringilla. Curabitur sed augue at dolor tempor viverra quis eget dolor. Integer pulvinar mattis enim sed commodo. Pellentesque enim ex, tincidunt non augue ac, volutpat pellentesque est.
            </ProjectSection>
            <ProjectSection id="dev-header" title="Development">
                In ac tempus urna, at molestie nisl. Quisque ac est ac dolor tristique vehicula. Integer eleifend efficitur convallis. In blandit purus velit, ut iaculis ante vestibulum feugiat. Aliquam molestie vehicula urna, quis gravida ipsum viverra eget. Suspendisse ante quam, viverra sed dictum in, blandit a libero. Morbi eu fringilla eros. Integer eu leo est. Vivamus lacinia ante et ante dignissim tincidunt. Phasellus non risus nec metus finibus eleifend pulvinar non quam. Integer eget nulla viverra, gravida ante a, sagittis velit. Nullam vitae gravida ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pretium molestie odio, fermentum consectetur lectus consequat nec. Donec elit ligula, tempor in quam et, gravida blandit dolor.

                Vivamus id ante et leo ultricies fringilla eget auctor erat. In non magna non massa aliquam hendrerit vitae id dui. Nunc sed consequat felis, eget elementum augue. Donec porta aliquet est. Quisque ultrices elit sit amet fringilla feugiat. Aliquam efficitur risus semper mauris ultricies, quis dapibus nunc condimentum. Donec id ipsum aliquam, euismod turpis eu, viverra lacus. Proin sit amet ligula lacus.

                Praesent faucibus nec dui sit amet vulputate. Morbi dapibus volutpat lorem at convallis. Nunc a velit purus. Donec at ipsum ut ipsum rhoncus mattis. Proin vitae libero posuere ligula volutpat sagittis non in odio. Aliquam scelerisque leo at neque varius, porta aliquam ex sagittis. Fusce purus lectus, fringilla eu ligula id, convallis feugiat orci. In volutpat, mauris sit amet auctor fermentum, libero felis ornare est, eu vehicula sem dui et libero. Nullam vitae pharetra tortor.
            </ProjectSection>
            <ProjectSection id="res-header" title="Results">
                Phasellus vitae fermentum turpis, eu aliquet enim. Curabitur urna lectus, rhoncus non suscipit eget, pretium non felis. Etiam rutrum metus quis blandit finibus. Etiam ullamcorper elit nec sodales vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean mattis diam eget ex bibendum luctus. Pellentesque sed neque volutpat, placerat libero et, hendrerit purus. Mauris facilisis justo sed ex suscipit, id molestie nulla tincidunt. Fusce aliquam accumsan nulla in iaculis. Cras fringilla diam sed tellus tempor blandit. Ut lacus lectus, hendrerit sit amet mauris a, aliquam molestie ligula. Sed ut ante tortor.

                Donec sodales auctor orci sit amet venenatis. Vestibulum fermentum nisi quis elit aliquet tincidunt. Vivamus ullamcorper enim tortor, sit amet sagittis turpis elementum ut. Nam in ex vitae dolor semper congue ac vitae augue. Nulla eget vulputate urna. Etiam lacinia et odio tincidunt tempus. Duis cursus dictum ipsum vel suscipit. Morbi mollis nisi porta magna molestie, id mollis arcu malesuada. Maecenas pulvinar mauris eu ornare pellentesque. Donec ornare condimentum lectus eu faucibus. Aenean suscipit lorem pharetra justo consequat varius. Cras et tempus velit, a molestie est. Etiam laoreet faucibus gravida. Duis bibendum ex ac posuere tincidunt. Maecenas ultrices ipsum ex, in ultricies lacus facilisis eget. Duis laoreet nisl vitae augue finibus scelerisque.

                In hac habitasse platea dictumst. Donec ultrices nisl eget lacus consectetur, id posuere libero lacinia. Nunc enim diam, accumsan bibendum enim nec, vehicula semper quam. Maecenas rutrum sed nisl vitae sagittis. Vestibulum interdum pretium augue sed congue. Donec nibh est, mollis in luctus rhoncus, condimentum eget dolor. Quisque a sapien a libero hendrerit convallis. Proin eu fringilla ipsum, mattis congue erat. Vivamus in rutrum arcu. Nam eu congue libero. Curabitur eget velit ac dolor ultricies placerat at ac orci. Etiam et tempus ipsum. In sed massa non nulla faucibus pellentesque. Vestibulum ultricies ultricies dolor nec volutpat.

                Curabitur dapibus auctor sem at tincidunt. Proin ex erat, sodales nec turpis vel, accumsan mollis lectus. Fusce sit amet metus sit amet lacus rhoncus dapibus. Maecenas convallis, nisl dictum posuere congue, velit nibh tempus ligula, in porttitor lectus nulla sed est. Pellentesque interdum lectus consequat, lacinia velit sed, luctus nisi. Maecenas mollis erat mauris, a venenatis velit consequat ac. Ut pellentesque magna augue, vel fringilla orci rhoncus ac. Aliquam volutpat id nulla eget vestibulum. Aliquam tempor, nibh ultricies tincidunt lobortis, sapien nisi rutrum lorem, id accumsan lacus ex ut est. Integer est enim, malesuada non dignissim sit amet, condimentum at sem. Quisque a tincidunt quam. Etiam enim nisi, fermentum quis tincidunt quis, bibendum non mi. Integer euismod erat in massa efficitur, a dignissim dolor fermentum. Pellentesque faucibus, diam ac pulvinar hendrerit, mi arcu sollicitudin tellus, eget commodo dolor dolor quis sem.
            </ProjectSection>
            <ProjectSection id="conc-header" title="Conclusion">
                Donec a magna mattis magna semper scelerisque vitae ut enim. Ut dapibus, magna vel bibendum scelerisque, mi purus pharetra dolor, vitae condimentum nisl nunc a turpis. Duis ac molestie velit, condimentum venenatis lorem. Quisque convallis efficitur accumsan. Phasellus ornare ipsum sed massa accumsan tincidunt. Phasellus iaculis augue a leo viverra molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                Vestibulum felis nulla, placerat in leo vel, interdum volutpat tellus. Proin ligula est, sagittis sit amet cursus eget, porttitor vel tortor. Etiam tristique turpis in tincidunt porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ut pulvinar odio, et tincidunt tortor. Vivamus auctor pharetra eros, vel lobortis dui semper eu. Sed porttitor enim vitae tellus fermentum condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a viverra odio. Vivamus euismod nulla vitae blandit sagittis. Vivamus tortor nunc, pulvinar tincidunt urna at, suscipit semper erat. Maecenas quis est non velit mollis imperdiet quis sed magna.

                Nunc tristique, arcu ac tristique dictum, quam dui varius purus, pellentesque mattis purus dui a ligula. Pellentesque eget augue pretium, mattis enim viverra, tempus sem. Duis in sapien eu mauris venenatis ornare. Suspendisse a bibendum urna. Suspendisse aliquam luctus luctus. Nulla pretium tellus quis pretium cursus. Praesent id consectetur mauris. Nunc a euismod leo. Pellentesque erat lectus, ultrices sed nunc id, condimentum luctus urna. Nunc dignissim imperdiet consequat. Suspendisse ut turpis quis risus vestibulum cursus.
            </ProjectSection>
            <ProjectSection id="future-header" title="Future Work">
                Donec a magna mattis magna semper scelerisque vitae ut enim. Ut dapibus, magna vel bibendum scelerisque, mi purus pharetra dolor, vitae condimentum nisl nunc a turpis. Duis ac molestie velit, condimentum venenatis lorem. Quisque convallis efficitur accumsan. Phasellus ornare ipsum sed massa accumsan tincidunt. Phasellus iaculis augue a leo viverra molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                Vestibulum felis nulla, placerat in leo vel, interdum volutpat tellus. Proin ligula est, sagittis sit amet cursus eget, porttitor vel tortor. Etiam tristique turpis in tincidunt porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ut pulvinar odio, et tincidunt tortor. Vivamus auctor pharetra eros, vel lobortis dui semper eu. Sed porttitor enim vitae tellus fermentum condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a viverra odio. Vivamus euismod nulla vitae blandit sagittis. Vivamus tortor nunc, pulvinar tincidunt urna at, suscipit semper erat. Maecenas quis est non velit mollis imperdiet quis sed magna.

                Nunc tristique, arcu ac tristique dictum, quam dui varius purus, pellentesque mattis purus dui a ligula. Pellentesque eget augue pretium, mattis enim viverra, tempus sem. Duis in sapien eu mauris venenatis ornare. Suspendisse a bibendum urna. Suspendisse aliquam luctus luctus. Nulla pretium tellus quis pretium cursus. Praesent id consectetur mauris. Nunc a euismod leo. Pellentesque erat lectus, ultrices sed nunc id, condimentum luctus urna. Nunc dignissim imperdiet consequat. Suspendisse ut turpis quis risus vestibulum cursus.
            </ProjectSection>
        </ProjectPageContainer>
     )
    }
}

export default Pacman;
