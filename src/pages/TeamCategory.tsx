/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { teamData, TeamMember } from '../data/teamData';

const MemberCard = ({ member, teamId }: { member: TeamMember; teamId: string }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group aspect-[4/5]"
      onClick={() => navigate(`/team/${teamId}/${member.id}`)}
    >
      <img
        src={member.photo1}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Center button on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <span className="bg-gold text-deep-green font-bold py-2 px-6 rounded-lg shadow-lg">
          View Bio →
        </span>
      </div>

      {/* Bottom label area (fades out on hover) */}
      <div className="absolute bottom-0 left-0 right-0 bg-deep-green p-5 transition-opacity duration-300 group-hover:opacity-0 z-10">
        <h3 className="font-heading font-bold text-gold text-xl leading-tight">
          {member.name}
        </h3>
        <p className="text-white text-sm font-semibold mt-1">{member.title}</p>
      </div>
    </div>
  );
};

const SimpleCard = ({ member }: { member: TeamMember }) => (
  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
    <img
      src={member.photo1}
      alt={member.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-deep-green p-5 z-10">
      <h3 className="font-heading font-bold text-gold text-xl leading-tight">
        {member.name}
      </h3>
      <p className="text-white text-sm font-semibold mt-1">{member.title}</p>
    </div>
  </div>
);

const TeamCategory = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const team = teamData[teamId || ''];

  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-deep-green mb-4">Team not found</h2>
          <Link to="/about" className="text-gold hover:underline">
            ← Back to About
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{team.name} | TEK Foundation</title>
      </Helmet>

      <div className="min-h-screen bg-cream">
        <div className="bg-deep-green pt-32 pb-16 px-6 text-center relative">
          <Link
            to="/about"
            className="absolute left-8 top-32 inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} />
            Back to About
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {team.name}
          </h1>
          <div className="w-16 h-1 bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Meet the dedicated individuals who make up our {team.name}.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.members.map((member) => (
              team.type === 'flip' ? (
                <MemberCard key={member.id} member={member} teamId={teamId || ''} />
              ) : (
                <SimpleCard key={member.id} member={member} />
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCategory;
